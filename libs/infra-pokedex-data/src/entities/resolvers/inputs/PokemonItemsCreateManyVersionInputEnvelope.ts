import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyVersionInput } from "../inputs/PokemonItemsCreateManyVersionInput";

@TypeGraphQL.InputType("PokemonItemsCreateManyVersionInputEnvelope", {})
export class PokemonItemsCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateManyVersionInput], {
    nullable: false
  })
  data!: PokemonItemsCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
