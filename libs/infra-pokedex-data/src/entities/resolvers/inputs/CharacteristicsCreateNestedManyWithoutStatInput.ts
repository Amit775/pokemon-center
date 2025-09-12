import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateManyStatInputEnvelope } from "../inputs/CharacteristicsCreateManyStatInputEnvelope";
import { CharacteristicsCreateOrConnectWithoutStatInput } from "../inputs/CharacteristicsCreateOrConnectWithoutStatInput";
import { CharacteristicsCreateWithoutStatInput } from "../inputs/CharacteristicsCreateWithoutStatInput";
import { CharacteristicsWhereUniqueInput } from "../inputs/CharacteristicsWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicsCreateNestedManyWithoutStatInput", {})
export class CharacteristicsCreateNestedManyWithoutStatInput {
  @TypeGraphQL.Field(_type => [CharacteristicsCreateWithoutStatInput], {
    nullable: true
  })
  create?: CharacteristicsCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: CharacteristicsCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: CharacteristicsCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsWhereUniqueInput], {
    nullable: true
  })
  connect?: CharacteristicsWhereUniqueInput[] | undefined;
}
