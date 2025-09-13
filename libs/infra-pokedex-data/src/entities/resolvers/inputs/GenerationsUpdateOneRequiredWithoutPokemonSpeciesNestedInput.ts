import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateOrConnectWithoutPokemonSpeciesInput";
import { GenerationsCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateWithoutPokemonSpeciesInput";
import { GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput";
import { GenerationsUpsertWithoutPokemonSpeciesInput } from "../inputs/GenerationsUpsertWithoutPokemonSpeciesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonSpeciesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutPokemonSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutPokemonSpeciesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput | undefined;
}
