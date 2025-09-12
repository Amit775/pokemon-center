import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutEfficacyInput } from "../inputs/TypesCreateWithoutEfficacyInput";
import { TypesUpdateWithoutEfficacyInput } from "../inputs/TypesUpdateWithoutEfficacyInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutEfficacyInput", {})
export class TypesUpsertWithoutEfficacyInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutEfficacyInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutEfficacyInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutEfficacyInput, {
    nullable: false
  })
  create!: TypesCreateWithoutEfficacyInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
