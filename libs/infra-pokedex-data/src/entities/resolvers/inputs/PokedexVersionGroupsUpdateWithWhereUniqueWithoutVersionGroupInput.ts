import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsUpdateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsUpdateWithoutVersionGroupInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsUpdateWithoutVersionGroupInput;
}
