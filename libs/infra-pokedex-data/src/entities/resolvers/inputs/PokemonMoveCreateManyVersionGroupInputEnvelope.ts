import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateManyVersionGroupInput } from "../inputs/PokemonMoveCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokemonMoveCreateManyVersionGroupInputEnvelope", {})
export class PokemonMoveCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokemonMoveCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
