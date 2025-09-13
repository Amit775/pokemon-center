import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyItemInput } from "../inputs/PokemonItemsCreateManyItemInput";

@TypeGraphQL.InputType("PokemonItemsCreateManyItemInputEnvelope", {})
export class PokemonItemsCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateManyItemInput], {
    nullable: false
  })
  data!: PokemonItemsCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
