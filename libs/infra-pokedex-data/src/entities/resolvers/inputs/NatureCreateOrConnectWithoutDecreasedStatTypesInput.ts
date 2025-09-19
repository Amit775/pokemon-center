import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutDecreasedStatTypesInput } from "../inputs/NatureCreateWithoutDecreasedStatTypesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateOrConnectWithoutDecreasedStatTypesInput", {})
export class NatureCreateOrConnectWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  create!: NatureCreateWithoutDecreasedStatTypesInput;
}
