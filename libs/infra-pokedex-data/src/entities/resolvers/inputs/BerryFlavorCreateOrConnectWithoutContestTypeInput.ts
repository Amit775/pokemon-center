import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutContestTypeInput } from "../inputs/BerryFlavorCreateWithoutContestTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateOrConnectWithoutContestTypeInput", {})
export class BerryFlavorCreateOrConnectWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutContestTypeInput;
}
