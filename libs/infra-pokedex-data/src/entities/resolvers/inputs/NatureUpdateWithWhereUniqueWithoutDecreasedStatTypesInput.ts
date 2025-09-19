import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateWithoutDecreasedStatTypesInput } from "../inputs/NatureUpdateWithoutDecreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput", {})
export class NatureUpdateWithWhereUniqueWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  data!: NatureUpdateWithoutDecreasedStatTypesInput;
}
