import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyVersionGroupInput } from "../inputs/PokemonMovesCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokemonMovesCreateManyVersionGroupInputEnvelope", {})
export class PokemonMovesCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokemonMovesCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
