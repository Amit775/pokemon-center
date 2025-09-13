import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutAbilitiesInput } from "../inputs/GenerationsUpdateWithoutAbilitiesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutAbilitiesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutAbilitiesInput;
}
