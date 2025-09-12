import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutAbilitiesInput } from "../inputs/PokemonUpdateWithoutAbilitiesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutAbilitiesInput", {})
export class PokemonUpdateToOneWithWhereWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutAbilitiesInput;
}
