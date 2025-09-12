import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutTypesInput } from "../inputs/GenerationsCreateWithoutTypesInput";
import { GenerationsUpdateWithoutTypesInput } from "../inputs/GenerationsUpdateWithoutTypesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutTypesInput", {})
export class GenerationsUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
