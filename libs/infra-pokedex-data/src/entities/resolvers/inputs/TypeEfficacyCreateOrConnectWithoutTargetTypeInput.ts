import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateWithoutTargetTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyCreateOrConnectWithoutTargetTypeInput", {})
export class TypeEfficacyCreateOrConnectWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateWithoutTargetTypeInput, {
    nullable: false
  })
  create!: TypeEfficacyCreateWithoutTargetTypeInput;
}
