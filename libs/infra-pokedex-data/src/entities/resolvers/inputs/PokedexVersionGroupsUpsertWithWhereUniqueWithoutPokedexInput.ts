import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateWithoutPokedexInput";
import { PokedexVersionGroupsUpdateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsUpdateWithoutPokedexInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput", {})
export class PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateWithoutPokedexInput, {
    nullable: false
  })
  update!: PokedexVersionGroupsUpdateWithoutPokedexInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateWithoutPokedexInput, {
    nullable: false
  })
  create!: PokedexVersionGroupsCreateWithoutPokedexInput;
}
