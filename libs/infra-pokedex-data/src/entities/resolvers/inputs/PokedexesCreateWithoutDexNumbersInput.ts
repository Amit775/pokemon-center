import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateNestedManyWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateNestedManyWithoutPokedexInput";
import { RegionsCreateNestedOneWithoutPokedexesInput } from "../inputs/RegionsCreateNestedOneWithoutPokedexesInput";

@TypeGraphQL.InputType("PokedexesCreateWithoutDexNumbersInput", {})
export class PokedexesCreateWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  @TypeGraphQL.Field(_type => RegionsCreateNestedOneWithoutPokedexesInput, {
    nullable: true
  })
  region?: RegionsCreateNestedOneWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateNestedManyWithoutPokedexInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsCreateNestedManyWithoutPokedexInput | undefined;
}
