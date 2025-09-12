import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodsScalarWhereInput";
import { VersionGroupPokemonMoveMethodsUpdateManyMutationInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsUpdateManyMutationInput;
}
