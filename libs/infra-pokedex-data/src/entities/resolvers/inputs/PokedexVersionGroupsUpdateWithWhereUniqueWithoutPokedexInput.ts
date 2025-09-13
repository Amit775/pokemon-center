import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsUpdateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsUpdateWithoutPokedexInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput", {})
export class PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateWithoutPokedexInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsUpdateWithoutPokedexInput;
}
