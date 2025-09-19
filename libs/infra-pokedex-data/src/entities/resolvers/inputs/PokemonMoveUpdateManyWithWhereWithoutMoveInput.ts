import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveScalarWhereInput } from "../inputs/PokemonMoveScalarWhereInput";
import { PokemonMoveUpdateManyMutationInput } from "../inputs/PokemonMoveUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonMoveUpdateManyWithWhereWithoutMoveInput", {})
export class PokemonMoveUpdateManyWithWhereWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMoveScalarWhereInput, {
    nullable: false
  })
  where!: PokemonMoveScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateManyMutationInput;
}
