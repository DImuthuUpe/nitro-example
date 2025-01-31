#include "HybridMathSpec.hpp"

namespace margelo::nitro::math {

    class HybridMath: public HybridMathSpec {
        public:
            HybridMath() : HybridObject(TAG), HybridMathSpec() {}
            
            double add(double a, double b) override;
    };
}