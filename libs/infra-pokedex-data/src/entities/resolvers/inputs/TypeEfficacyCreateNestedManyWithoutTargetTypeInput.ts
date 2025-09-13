import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyTargetTypeInputEnvelope } from "../inputs/TypeEfficacyCreateManyTargetTypeInputEnvelope";
import { TypeEfficacyCreateOrConnectWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateOrConnectWithoutTargetTypeInput";
import { TypeEfficacyCreateWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateWithoutTargetTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyCreateNestedManyWithoutTargetTypeInput", {})
export class TypeEfficacyCreateNestedManyWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateWithoutTargetTypeInput], {
    nullable: true
  })
  create?: TypeEfficacyCreateWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyCreateOrConnectWithoutTargetTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeEfficacyCreateOrConnectWithoutTargetTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateManyTargetTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeEfficacyCreateManyTargetTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeEfficacyWhereUniqueInput[] | undefined;
}
