import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateManyStatInputEnvelope } from "../inputs/CharacteristicCreateManyStatInputEnvelope";
import { CharacteristicCreateOrConnectWithoutStatInput } from "../inputs/CharacteristicCreateOrConnectWithoutStatInput";
import { CharacteristicCreateWithoutStatInput } from "../inputs/CharacteristicCreateWithoutStatInput";
import { CharacteristicWhereUniqueInput } from "../inputs/CharacteristicWhereUniqueInput";

@TypeGraphQL.InputType("CharacteristicCreateNestedManyWithoutStatInput", {})
export class CharacteristicCreateNestedManyWithoutStatInput {
  @TypeGraphQL.Field(_type => [CharacteristicCreateWithoutStatInput], {
    nullable: true
  })
  create?: CharacteristicCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: CharacteristicCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => CharacteristicCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: CharacteristicCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereUniqueInput], {
    nullable: true
  })
  connect?: CharacteristicWhereUniqueInput[] | undefined;
}
