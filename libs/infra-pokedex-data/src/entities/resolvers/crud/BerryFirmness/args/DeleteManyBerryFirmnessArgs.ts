import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFirmnessWhereInput } from "../../../inputs/BerryFirmnessWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBerryFirmnessArgs {
  @TypeGraphQL.Field(_type => BerryFirmnessWhereInput, {
    nullable: true
  })
  where?: BerryFirmnessWhereInput | undefined;
}
