import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodsUpdateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsUpdateWithoutVersionGroupsInput";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpsertWithoutVersionGroupsInput", {})
export class PokemonMoveMethodsUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: PokemonMoveMethodsUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokemonMoveMethodsCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;
}
