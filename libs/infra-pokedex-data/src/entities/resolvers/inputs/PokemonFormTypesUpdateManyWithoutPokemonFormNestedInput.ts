import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormTypesCreateManyPokemonFormInputEnvelope";
import { PokemonFormTypesCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormTypesCreateWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateWithoutPokemonFormInput";
import { PokemonFormTypesScalarWhereInput } from "../inputs/PokemonFormTypesScalarWhereInput";
import { PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput } from "../inputs/PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput";
import { PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput", {})
export class PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormTypesCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypesCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  upsert?: PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypesCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  update?: PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput], {
    nullable: true
  })
  updateMany?: PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormTypesScalarWhereInput[] | undefined;
}
