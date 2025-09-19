import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormGenerationCreateManyPokemonFormInputEnvelope";
import { PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormGenerationCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateWithoutPokemonFormInput";
import { PokemonFormGenerationScalarWhereInput } from "../inputs/PokemonFormGenerationScalarWhereInput";
import { PokemonFormGenerationUpdateManyWithWhereWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationUpdateManyWithWhereWithoutPokemonFormInput";
import { PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateManyWithoutPokemonFormNestedInput", {})
export class PokemonFormGenerationUpdateManyWithoutPokemonFormNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormGenerationCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  upsert?: PokemonFormGenerationUpsertWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  update?: PokemonFormGenerationUpdateWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationUpdateManyWithWhereWithoutPokemonFormInput], {
    nullable: true
  })
  updateMany?: PokemonFormGenerationUpdateManyWithWhereWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormGenerationScalarWhereInput[] | undefined;
}
