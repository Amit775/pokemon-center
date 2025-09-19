import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodScalarWhereInput";
import { VersionGroupPokemonMoveMethodUpdateManyMutationInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateManyMutationInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodScalarWhereInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodScalarWhereInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodUpdateManyMutationInput;
}
