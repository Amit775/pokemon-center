import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsScalarWhereInput } from "../inputs/PokedexVersionGroupsScalarWhereInput";
import { PokedexVersionGroupsUpdateManyMutationInput } from "../inputs/PokedexVersionGroupsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput", {})
export class PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsScalarWhereInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsUpdateManyMutationInput;
}
