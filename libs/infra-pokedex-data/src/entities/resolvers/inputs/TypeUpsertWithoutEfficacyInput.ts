import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutEfficacyInput } from "../inputs/TypeCreateWithoutEfficacyInput";
import { TypeUpdateWithoutEfficacyInput } from "../inputs/TypeUpdateWithoutEfficacyInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutEfficacyInput", {})
export class TypeUpsertWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutEfficacyInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutEfficacyInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutEfficacyInput, {
    nullable: false
  })
  create!: TypeCreateWithoutEfficacyInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
