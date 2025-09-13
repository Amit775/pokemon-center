import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutEncountersInput } from "../inputs/PokemonUpdateWithoutEncountersInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutEncountersInput", {})
export class PokemonUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutEncountersInput;
}
