import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutTypeGameIndicesInput } from "../inputs/GenerationsUpdateWithoutTypeGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutTypeGameIndicesInput;
}
