import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateManyWithoutLocationNestedInput } from "../inputs/LocationAreaUpdateManyWithoutLocationNestedInput";
import { LocationGameIndexUpdateManyWithoutLocationNestedInput } from "../inputs/LocationGameIndexUpdateManyWithoutLocationNestedInput";
import { RegionUpdateOneWithoutLocationsNestedInput } from "../inputs/RegionUpdateOneWithoutLocationsNestedInput";

@TypeGraphQL.InputType("LocationUpdateWithoutEvolutionInput", {})
export class LocationUpdateWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneWithoutLocationsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneWithoutLocationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  areas?: LocationAreaUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndexUpdateManyWithoutLocationNestedInput | undefined;
}
