import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolvesToInput";
import { PokemonSpeciesCreateWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesToInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput";
import { PokemonSpeciesUpsertWithoutEvolvesToInput } from "../inputs/PokemonSpeciesUpsertWithoutEvolvesToInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput", {})
export class PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolvesToInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutEvolvesToInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  disconnect?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  delete?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput | undefined;
}
