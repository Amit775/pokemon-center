import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutTypesInput } from "../inputs/GenerationsUpdateWithoutTypesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutTypesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutTypesInput;
}
