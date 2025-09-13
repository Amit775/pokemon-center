import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateManyStatInputEnvelope } from "../inputs/CharacteristicsCreateManyStatInputEnvelope";
import { CharacteristicsCreateOrConnectWithoutStatInput } from "../inputs/CharacteristicsCreateOrConnectWithoutStatInput";
import { CharacteristicsCreateWithoutStatInput } from "../inputs/CharacteristicsCreateWithoutStatInput";
import { CharacteristicsScalarWhereInput } from "../inputs/CharacteristicsScalarWhereInput";
import { CharacteristicsUpdateManyWithWhereWithoutStatInput } from "../inputs/CharacteristicsUpdateManyWithWhereWithoutStatInput";
import { CharacteristicsUpdateWithWhereUniqueWithoutStatInput } from "../inputs/CharacteristicsUpdateWithWhereUniqueWithoutStatInput";
import { CharacteristicsUpsertWithWhereUniqueWithoutStatInput } from "../inputs/CharacteristicsUpsertWithWhereUniqueWithoutStatInput";
import { CharacteristicsWhereUniqueInput } from "../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicsUpdateManyWithoutStatNestedInput", {})
export class CharacteristicsUpdateManyWithoutStatNestedInput {
  @TypeGraphQL.Field(_type => [CharacteristicsCreateWithoutStatInput], {
    nullable: true
  })
  create?: CharacteristicsCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: CharacteristicsCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsUpsertWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  upsert?: CharacteristicsUpsertWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: CharacteristicsCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereUniqueInput], {
    nullable: true
  })
  set?: CharacteristicsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CharacteristicsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereUniqueInput], {
    nullable: true
  })
  delete?: CharacteristicsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereUniqueInput], {
    nullable: true
  })
  connect?: CharacteristicsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsUpdateWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  update?: CharacteristicsUpdateWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsUpdateManyWithWhereWithoutStatInput], {
    nullable: true
  })
  updateMany?: CharacteristicsUpdateManyWithWhereWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CharacteristicsScalarWhereInput[] | undefined;
}
