import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutItemGameIndicesInput } from "../inputs/GenerationsUpdateWithoutItemGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutItemGameIndicesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutItemGameIndicesInput;
}
