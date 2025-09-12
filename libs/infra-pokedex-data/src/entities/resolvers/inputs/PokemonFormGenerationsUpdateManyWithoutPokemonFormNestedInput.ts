import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateManyPokemonFormInputEnvelope } from "../inputs/PokemonFormGenerationsCreateManyPokemonFormInputEnvelope";
import { PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput";
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateWithoutPokemonFormInput";
import { PokemonFormGenerationsScalarWhereInput } from "../inputs/PokemonFormGenerationsScalarWhereInput";
import { PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput";
import { PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput", {})
export class PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateWithoutPokemonFormInput], {
    nullable: true
  })
  create?: PokemonFormGenerationsCreateWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  upsert?: PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormGenerationsCreateManyPokemonFormInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormGenerationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput], {
    nullable: true
  })
  update?: PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput], {
    nullable: true
  })
  updateMany?: PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormGenerationsScalarWhereInput[] | undefined;
}
