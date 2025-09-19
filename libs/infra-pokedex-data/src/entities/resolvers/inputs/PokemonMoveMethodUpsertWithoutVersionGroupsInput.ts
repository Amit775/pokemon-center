import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodUpdateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodUpdateWithoutVersionGroupsInput";
import { PokemonMoveMethodWhereInput } from "../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpsertWithoutVersionGroupsInput", {})
export class PokemonMoveMethodUpsertWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  update!: PokemonMoveMethodUpdateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: PokemonMoveMethodCreateWithoutVersionGroupsInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;
}
