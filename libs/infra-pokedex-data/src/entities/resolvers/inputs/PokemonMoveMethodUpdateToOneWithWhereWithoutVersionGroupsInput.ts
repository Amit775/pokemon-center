import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodUpdateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodUpdateWithoutVersionGroupsInput";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: PokemonMoveMethodUpdateWithoutVersionGroupsInput;
}
