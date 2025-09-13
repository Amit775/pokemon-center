import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyMoveMethodInput } from "../inputs/PokemonMovesCreateManyMoveMethodInput";

@TypeGraphQL.InputType("PokemonMovesCreateManyMoveMethodInputEnvelope", {})
export class PokemonMovesCreateManyMoveMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateManyMoveMethodInput], {
    nullable: false
  })
  data!: PokemonMovesCreateManyMoveMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
