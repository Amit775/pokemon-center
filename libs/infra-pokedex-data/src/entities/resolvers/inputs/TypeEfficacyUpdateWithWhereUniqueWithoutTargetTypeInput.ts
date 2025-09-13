import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyUpdateWithoutTargetTypeInput } from "../inputs/TypeEfficacyUpdateWithoutTargetTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput", {})
export class TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateWithoutTargetTypeInput, {
    nullable: false
  })
  data!: TypeEfficacyUpdateWithoutTargetTypeInput;
}
