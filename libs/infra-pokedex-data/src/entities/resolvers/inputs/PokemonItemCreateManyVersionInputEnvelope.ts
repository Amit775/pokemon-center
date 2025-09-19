import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyVersionInput } from "../inputs/PokemonItemCreateManyVersionInput";

@TypeGraphQL.InputType("PokemonItemCreateManyVersionInputEnvelope", {})
export class PokemonItemCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonItemCreateManyVersionInput], {
    nullable: false
  })
  data!: PokemonItemCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
