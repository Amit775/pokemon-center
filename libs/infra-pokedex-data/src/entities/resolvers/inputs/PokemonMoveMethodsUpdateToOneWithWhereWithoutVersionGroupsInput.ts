import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsUpdateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsUpdateWithoutVersionGroupsInput";
import { PokemonMoveMethodsWhereInput } from "../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: PokemonMoveMethodsUpdateWithoutVersionGroupsInput;
}
