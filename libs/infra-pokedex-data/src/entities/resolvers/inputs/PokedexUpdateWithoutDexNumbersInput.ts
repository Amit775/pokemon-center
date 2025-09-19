import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupUpdateManyWithoutPokedexNestedInput } from "../inputs/PokedexVersionGroupUpdateManyWithoutPokedexNestedInput";
import { RegionUpdateOneWithoutPokedexesNestedInput } from "../inputs/RegionUpdateOneWithoutPokedexesNestedInput";

@TypeGraphQL.InputType("PokedexUpdateWithoutDexNumbersInput", {})
export class PokedexUpdateWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_main_series?: number | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneWithoutPokedexesNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneWithoutPokedexesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupUpdateManyWithoutPokedexNestedInput | undefined;
}
