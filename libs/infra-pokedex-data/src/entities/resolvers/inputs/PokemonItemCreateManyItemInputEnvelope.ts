import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyItemInput } from "../inputs/PokemonItemCreateManyItemInput";

@TypeGraphQL.InputType("PokemonItemCreateManyItemInputEnvelope", {})
export class PokemonItemCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonItemCreateManyItemInput], {
    nullable: false
  })
  data!: PokemonItemCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
