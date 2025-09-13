import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateWithoutTargetTypeInput } from "../inputs/TypeEfficacyCreateWithoutTargetTypeInput";
import { TypeEfficacyUpdateWithoutTargetTypeInput } from "../inputs/TypeEfficacyUpdateWithoutTargetTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput", {})
export class TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateWithoutTargetTypeInput, {
    nullable: false
  })
  update!: TypeEfficacyUpdateWithoutTargetTypeInput;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateWithoutTargetTypeInput, {
    nullable: false
  })
  create!: TypeEfficacyCreateWithoutTargetTypeInput;
}
