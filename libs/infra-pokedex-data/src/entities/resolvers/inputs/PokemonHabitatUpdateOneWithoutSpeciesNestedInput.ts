import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateOrConnectWithoutSpeciesInput";
import { PokemonHabitatCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateWithoutSpeciesInput";
import { PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput";
import { PokemonHabitatUpsertWithoutSpeciesInput } from "../inputs/PokemonHabitatUpsertWithoutSpeciesInput";
import { PokemonHabitatWhereInput } from "../inputs/PokemonHabitatWhereInput";
import { PokemonHabitatWhereUniqueInput } from "../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatUpdateOneWithoutSpeciesNestedInput", {})
export class PokemonHabitatUpdateOneWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonHabitatCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonHabitatCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonHabitatCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonHabitatUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  disconnect?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  delete?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonHabitatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
