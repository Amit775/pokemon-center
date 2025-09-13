import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from "../inputs/PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput";
import { RegionsUpdateOneWithoutPokedexesNestedInput } from "../inputs/RegionsUpdateOneWithoutPokedexesNestedInput";

@TypeGraphQL.InputType("PokedexesUpdateWithoutDexNumbersInput", {})
export class PokedexesUpdateWithoutDexNumbersInput {
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

  @TypeGraphQL.Field(_type => RegionsUpdateOneWithoutPokedexesNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneWithoutPokedexesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput | undefined;
}
