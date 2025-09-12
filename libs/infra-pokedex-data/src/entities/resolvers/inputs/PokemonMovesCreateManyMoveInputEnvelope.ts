import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveInput } from "../inputs/PokemonMovesCreateManyMoveInput";

@TypeGraphQL.InputType("PokemonMovesCreateManyMoveInputEnvelope", {})
export class PokemonMovesCreateManyMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateManyMoveInput], {
    nullable: false
  })
  data!: PokemonMovesCreateManyMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
