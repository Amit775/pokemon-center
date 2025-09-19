import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessCreateInput } from "../../../inputs/BerryFirmnessCreateInput";
import { BerryFirmnessUpdateInput } from "../../../inputs/BerryFirmnessUpdateInput";
import { BerryFirmnessWhereUniqueInput } from "../../../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFirmnessWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateInput, {
    nullable: false
  })
  create!: BerryFirmnessCreateInput;

  @TypeGraphQL.Field(_type => BerryFirmnessUpdateInput, {
    nullable: false
  })
  update!: BerryFirmnessUpdateInput;
}
