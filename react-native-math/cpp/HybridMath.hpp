#include "HybridMathSpec.hpp"

namespace margelo::nitro::math {

    class HybridMath: public HybridMathSpec {
        public:
            double add(double a, double b) override;
    };
}