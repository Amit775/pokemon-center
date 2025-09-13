import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateWithoutTypeGameIndicesInput";
import { GenerationsUpdateWithoutTypeGameIndicesInput } from "../inputs/GenerationsUpdateWithoutTypeGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutTypeGameIndicesInput", {})
export class GenerationsUpsertWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutTypeGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutTypeGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
