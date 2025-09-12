import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateWithoutVersionGroupInput";
import { PokedexVersionGroupsUpdateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsUpdateWithoutVersionGroupInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: PokedexVersionGroupsUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokedexVersionGroupsCreateWithoutVersionGroupInput;
}
